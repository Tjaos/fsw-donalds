import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ProductPage = () => {
  return (
    <div className="rounded-xl border-2 border-solid border-red-500 p-5">
      <h1 className="text-red-500">Products Page</h1>
      <Button>Botão shadcn</Button>
      <Input placeholder="Input baixado do shadcn" />
    </div>
  );
};

export default ProductPage;
