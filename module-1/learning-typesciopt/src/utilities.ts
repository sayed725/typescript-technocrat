// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;

type ProductWithoutStock = Omit<Product, "stock" | "color">;

type ProductWithColor = Required<Product>;

const productt: ProductWithColor = {
  id: 2222,
  name: "Mouse",
  price: "20",
  stock: 1001,
  color: "black",
};

type OptionProduct = Partial<Product>;
type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};