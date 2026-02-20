"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { SlidingNumber } from "../../components/motion-primitives/sliding-number";

const Clock = () => {
	const [hour, setHours] = useState("00");
	const [minutes, setMinutes] = useState("00");
	const [second, setSecoend] = useState("00");
	const [ampm, setAmpm] = useState("00");
	const [date, setDate] = useState(format(new Date(), "eeee, dd LLLL yyyy"));

	useEffect(() => {
		const interval = setInterval(() => {
			setHours(format(new Date(), "hh"));
			setMinutes(format(new Date(), "mm"));
			setSecoend(format(new Date(), "ss"));
			setAmpm(format(new Date(), "a"));

			setDate(format(new Date(), "eeee, dd LLLL yyyy"));
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	return (
		<section>
			<div className="bg-card text-card-foreground mx-auto h-80 w-180 rounded-xl shadow-2xl">
				<div className="flex items-center p-3">
					<div className="px-1">
						<span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-red-500"></span>
					</div>

					<div className="px-1">
						<span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-yellow-400"></span>
					</div>
					<div className="px-1">
						<span className="inline-block h-4 w-4 cursor-pointer rounded-full bg-green-500"></span>
					</div>
				</div>
				<div className="flex h-full flex-col items-center justify-center gap-3 font-mono text-4xl">
					<div className="flex items-center justify-center">
						<SlidingNumber
							padStart={true}
							value={hour}
						/>
						<span>:</span>
						<SlidingNumber
							value={minutes}
							padStart={true}
						/>
						<span>:</span>
						<SlidingNumber value={second} />
					</div>
					<div className="">{date}</div>
				</div>
			</div>
		</section>
	);
};

export default Clock;
