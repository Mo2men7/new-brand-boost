import Image from "next/image";
import Marquee from "react-fast-marquee";

function ThemedMarquee({ items }) {
  return (
    <Marquee
      className="bg-[#c5fb79] border-t-2 border-b-2 border-[#09060a] py-2"
      autoFill
      pauseOnHover
      direction="left"
      gradient
      gradientColor="#c5fb79"
    >
      {items.map((item) => (
        <Image
          key={item.id}
          alt={`marquee image ${item.id}`}
          src={item.src}
          width={50}
          height={50}
          className="mx-12"
        />
      ))}
    </Marquee>
  );
}

export default ThemedMarquee;
