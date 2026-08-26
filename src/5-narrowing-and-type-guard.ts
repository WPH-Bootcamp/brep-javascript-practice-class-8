interface Buku {
  id: string;
  judul: string;
  penulis: string;
  tahun: number;
}

async function fetchBook(): Promise<void> {
  try {
    const response = await fetch('/api/books');
    const data: unknown = await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

//  Narrowing dengan typeof
function print(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }

  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }

  if (typeof value === 'object' && value !== null && 'judul' in value) {
    console.log(value.judul);
  }
  if (typeof value === 'object' && value !== null && 'id' in value) {
    console.log(value.id);
  }
  if (typeof value === 'object' && value !== null && 'penulis' in value) {
    console.log(value.penulis);
  }
  if (typeof value === 'object' && value !== null && 'tahun' in value) {
    console.log(value.tahun);
  }
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
    typeof value.tahun === 'number'
  );
}

const data: unknown = {
  id: 'B0001',
  judul: 'Typescript',
  penulis: 'Ucup',
  tahun: 2027,
};

if (isBuku(data)) {
  console.log(data.judul);
}

function isBukuArray(value: unknown): value is Buku[] {
  return Array.isArray(value) && value.every(isBuku);
}

type Validator<T> = (value: unknown) => value is T;

function isArrayOf<T>(value: unknown, validator: Validator<T>): value is T[] {
  return Array.isArray(value) && value.every(validator);
}
