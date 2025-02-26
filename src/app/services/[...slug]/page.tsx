import HeroSectionInner from "@/components/shared/hero-inner";
import { getAllServicesSlug, getServiceContent } from "@/lib/actions";
import { notFound } from "next/navigation";
import SubServices from "@/components/services/sub-services";

export const generateStaticParams = async () => await getAllServicesSlug();

const ServicePage = async ({ params }: { params: Promise<{ slug: string[] }>}) => {
  const slug = (await params).slug;
  const content = await getServiceContent(`/services/${slug.join("/")}`);

  if (!content) return notFound();

  return (
    <div>
      <HeroSectionInner content={content.hero} />
      <SubServices content={content.subservices} />
    </div>
  )
}

export default ServicePage;