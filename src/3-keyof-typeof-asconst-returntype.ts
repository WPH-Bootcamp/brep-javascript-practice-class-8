// 1. keyof
interface Buku {
  id: string;
  judul: string;
  penulis: string;
}

function ambilField(buku: Buku, field: keyof Buku) {
  console.log(buku[field]);
}

const buku = {
  id: 'BK0001',
  judul: 'Belajar Hidup',
  penulis: 'Ucup Renday',
};

ambilField(buku, 'penulis');

function getValue<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const buku2 = {
  id: 'B001',
  judul: 'TypeScript',
  tahun: 2026,
};

console.log(getValue(buku2, 'judul'));

// 2. typeof
const config = {
  apiUrl: '/api',
  timeout: 5000,
  debug: true,
};

type Config = typeof config;

const configGameAPI: Config = {
  apiUrl: '/api/game',
  timeout: 5000,
  debug: false,
};

console.log(configGameAPI);

// 3. as const
const STATUS = ['tersedia', 'dipinjam'] as const;
STATUS.push('free');

console.log(STATUS);

// 4. ReturnType
function createUser() {
  return {
    id: 1,
    name: 'Ucup',
    isActive: true,
  };
}

type User = ReturnType<typeof createUser>;

// 5. Paramaters
function updateBook(id: number, title: string, year: number): void {}
type UpdateBookParams = Parameters<typeof updateBook>;
