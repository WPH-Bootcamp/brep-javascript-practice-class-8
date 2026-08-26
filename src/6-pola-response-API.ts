const STATUS_BUKU = ['tersedia', 'dipinjamg'] as const;

type StatusBuku = (typeof STATUS_BUKU)[number];

interface Buku {
  id: string;
  judul: string;
  penulis: string;
  tahun: number;
  status: StatusBuku;
}

function isStatusBuku(value: unknown): value is StatusBuku {
  return (
    typeof value === 'string' && STATUS_BUKU.some((status) => status === value)
  );
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isBuku(value: unknown): value is Buku {
  if (!isObject(value)) {
    return false;
  }

  return (
    typeof value.id === 'string' &&
    typeof value.judul === 'string' &&
    typeof value.penulis === 'string' &&
    typeof value.tahun === 'number' &&
    isStatusBuku(value.status)
  );
}

async function getBook() {
  const response = await fetch('/api/books');
  return response.json();
}

type Hasil<T> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      pesan: string;
    };

type Validator<T> = (value: unknown) => value is T;

async function fetchJson<T>(
  url: string,
  validator: Validator<T>
): Promise<Hasil<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return {
        ok: false,
        pesan: `HTTP Error${response.status}`,
      };
    }

    const data: unknown = await response.json();

    if (!validator(data)) {
      return {
        ok: false,
        pesan: 'Format response tidak valid',
      };
    }

    return {
      ok: true,
      data,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: false,
        pesan: error.message,
      };
    }

    return {
      ok: false,
      pesan: 'Unknown error',
    };
  }
}

const hasil = await fetchJson('/api/books/B001', isBuku);

function arrayOf<T>(validator: Validator<T>): Validator<T[]> {
  return (value: unknown): value is T[] => {
    return Array.isArray(value) && value.every(validator);
  };
}

const isBukuList = arrayOf(isBuku);
// const isUserList = arrayOf(isUser);

// Satisfies
type EndpointName = 'list' | 'detail' | 'create';
const ENDPOINTS = {
  list: '/api/books',
  detail: '/api/books/:id',
  create: '/api/books',
} satisfies Record<EndpointName, string>;
