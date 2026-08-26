interface Buku {
  id: string;
  judul: string;
  penulis: string;
}

type State = {
  loading: boolean;
  data?: Buku[];
  error?: string;
};

const state: State = {
  loading: true,
  data: [],
  error: 'Server error',
};

// Discriminated Union
type BukuState =
  | {
      status: 'idle';
    }
  | {
      status: 'loading';
    }
  | {
      status: 'success';
      data: Buku[];
    }
  | {
      status: 'error';
      message: string;
    };

function tampilakn(state: BukuState) {
  if (state.status === 'idle') {
    console.log(state.status);
  }
  if (state.status === 'loading') {
    console.log(state.status);
  }
  if (state.status === 'success') {
    console.log(state.data);
  }
  if (state.status === 'error') {
    console.log(state.message);
  }
}

function assertNever(value: never): never {
  throw new Error('State tidak tertangani');
}

function render(state: BukuState) {
  switch (state.status) {
    case 'idle':
      return 'Idle';
    case 'loading':
      return 'Loading';
    case 'success':
      return state.data;
    case 'error':
      return state.message;
    default:
      return assertNever(state);
  }
}
