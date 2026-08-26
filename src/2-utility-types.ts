// 1. Pick <T, K>
type Buku = {
  id: number;
  judul: string;
  penulis: string;
  penerbit: string;
};

type BukuCard = Pick<Buku, 'judul' | 'penulis'>;

const bukuCard: BukuCard = {
  judul: 'Belajar Typescript',
  penulis: 'Dicky Fernando Sitepu',
};

console.log(bukuCard);

// 2. Omit <T, K>
type BukuCover = Omit<Buku, 'id'>;
const bukuCover: BukuCover = {
  judul: 'Belajar Typescript',
  penulis: 'Dicky Fernando Sitepu',
  penerbit: 'Dgamedev Studio',
};
console.log(bukuCover);

// 3. Partial <T>
type User = {
  nik: string;
  name: string;
  address?: string;
  age: number;
  hobby?: string;
};

type UserOptional = Partial<User>;
const userOptional: UserOptional = {
  nik: '01923819090123',
  name: 'Ucup',
};
userOptional.address = 'Jl Untung Jawa';
console.log(userOptional);

// 4. Required <T>
type UserRequired = Required<User>;
const userRequired: UserRequired = {
  nik: '19023910823',
  name: 'Ucup',
  address: 'JL Untung Jawa',
  age: 20,
  hobby: 'Ngoding',
};
console.log(userRequired);

// 5. Readonly <T>
type UserReadonly = Readonly<User>;
const userReadonly: UserReadonly = {
  nik: '19023910823',
  name: 'Ucup',
  age: 20,
  hobby: 'Ngoding',
};
console.log(userReadonly);
userReadonly.address = 'Jl Untung Jawa';

// 6. Record <K, T>
type Status = 'idle' | 'loading' | 'success' | 'error';
const STATUS_MESSAGE: Record<Status, string> = {
  idle: 'Belum dimulai',
  loading: 'Memuat data',
  success: 'Berhasil',
  error: 'Terjadi kesalahan',
};
console.log(STATUS_MESSAGE);
