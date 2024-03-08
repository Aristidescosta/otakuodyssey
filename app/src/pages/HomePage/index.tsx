import { Header, OdysseyItemCard } from "@/src/components";

import { FeaturedScreen } from "./components/FeaturedScreen";
import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
	Scrollbar,
	A11y,
	EffectCards,
} from "swiper/modules";
import "swiper/css";

export const HomePage = () => {
	return (
		<>
			<Header />
			<FeaturedScreen />
			<Swiper
				modules={[Scrollbar, A11y, EffectCards]}
				scrollbar={{ draggable: true }}
				effect="card"
				spaceBetween={50}
				slidesPerView={1.2}
				style={{ padding: 30 }}
			>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
				<SwiperSlide style={{ overflow: "visible" }}>
					<OdysseyItemCard />
				</SwiperSlide>
			</Swiper>
		</>
	);
};
