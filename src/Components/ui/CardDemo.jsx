
import { CardBody, CardContainer, CardItem } from "./CardContainer";

export function ThreeDCardDemo({data}) {
  return (
    (<CardContainer className="inter-var">
      <CardBody
        className=" relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-full h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white mb-2">
          {data.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-100 line-clamp-2 text-sm  mb-6  dark:text-neutral-300">
          {data.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full ">
          <img
            src={data.img}
            className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail" />
        </CardItem>
      </CardBody>
    </CardContainer>)
  );
}
