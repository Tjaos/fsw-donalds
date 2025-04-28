import { ChevronLeft, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isComsumptionMethodValid = (consumptionMethod: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  if (!consumptionMethod) {
    return notFound();
  }
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return (
    <div className="">
      <RestaurantHeader restaurant={restaurant} />
    </div>
  );
};

export default RestaurantMenuPage;
