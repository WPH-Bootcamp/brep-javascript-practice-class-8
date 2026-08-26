function ambilPertamaString(items: string[]): string | undefined {
  return items[0];
}

const nama = ambilPertamaString(['Ucup', 'Renday', 'Budi']);
console.log(nama);

function ambilPertamaNumber(items: number[]): number | undefined {
  return items[0];
}

const nilai = ambilPertamaNumber([100, 20, 90]);
console.log(nilai);

interface Buku {
  id: string;
  judul: string;
}

function ambilPertamaBuku(items: Buku[]): Buku | undefined {
  return items[0];
}

const buku = ambilPertamaBuku([
  { id: 'BK001', judul: 'Belajar Typescript' },
  { id: 'BK002', judul: 'Belajar Javascript' },
  { id: 'BK003', judul: 'Belajar HTML dan CSS' },
]);
console.log(buku);

// 1. Dengan any
function ambilPertamaAny(items: any[]): any {
  return items[0];
}

const namaAny = ambilPertamaAny(['Ucup', 'Renday', 'Budi']);
console.log(namaAny);

const nilaiAny = ambilPertamaAny([100, 20, 90]);
console.log(nilaiAny);

const bukuAny = ambilPertamaAny([
  { id: 'BK001', judul: 'Belajar Typescript' },
  { id: 'BK002', judul: 'Belajar Javascript' },
  { id: 'BK003', judul: 'Belajar HTML dan CSS' },
]);
console.log(bukuAny);

// 2. Generic
function ambilPertamaGeneric<T>(items: T[]): T | undefined {
  return items[0];
}

const namaGeneric = ambilPertamaGeneric<string>(['Ucup', 'Renday', 'Budi']);
console.log(namaGeneric);

const nilaiGeneric = ambilPertamaGeneric([100, 20, 90]);
console.log(nilaiGeneric);

const bukuGeneric = ambilPertamaGeneric([
  { id: 'BK001', judul: 'Belajar Typescript' },
  { id: 'BK002', judul: 'Belajar Javascript' },
  { id: 'BK003', judul: 'Belajar HTML dan CSS' },
]);

console.log(bukuGeneric);

// 3. Generic Constraint
function getId<T extends { id: string }>(item: T): string {
  return item.id;
}

const bukuConstraint = {
  id: 'BK0004',
  judul: 'The Power Of Typescript',
};

console.log(getId(bukuConstraint));

function cariById<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find((item) => item.id === id);
}

interface Buku {
  id: string;
  judul: string;
}

interface User {
  id: string;
  nama: string;
}

const user: User[] = [
  {
    id: 'USR0001',
    nama: 'Ucup',
  },
  {
    id: 'USR0002',
    nama: 'Renday',
  },
  {
    id: 'USR0003',
    nama: 'Budi',
  },
];

console.log(cariById(user, 'USR0004'));

interface Product {
  id: string;
  price: number;
}
