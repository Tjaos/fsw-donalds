import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ProductPage = () => {
  return (
    <div className="p-5 border-solid border-2 border-red-500 rounded-xl">
      <h1 className="text-red-500">Products Page</h1>
      <Button>Botão shadcn</Button>
      <Input placeholder="Input baixado do shadcn" />
    </div>
  );
};

export default ProductPage;
