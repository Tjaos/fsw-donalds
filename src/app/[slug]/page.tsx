import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumptoin-method-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* LOGO E TITULO */}
      <div className="flex flex-col items-center gap-2">
        <Image
          width={82}
          height={82}
          src={restaurant.avatarImageUrl}
          alt="{restaurant.name}"
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      {/* BEM-VINDO */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Comer no Local"
          imageAlt="Para comer aqui"
          imageUrl="/dine_in.png"
        />

        <ConsumptionMethodOption
          option="TAKEAWAY"
          slug={slug}
          buttonText="Para Viagem"
          imageAlt="Para levar"
          imageUrl="/takeaway.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
