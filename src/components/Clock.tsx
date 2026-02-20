"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";

const Clock = () => {
	const [hour, setHours] = useState("00");
	const [minutes, setMinutes] = useState("00");
	const [second, setSecoend] = useState("00");
	const [ampm, setAmpm] = useState(format(new Date(), "eeee,dd LLLL yyyy"));

	useEffect(() => {}, []);

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
				<div className="flex h-full flex-col items-center justify-center gap-3 font-mono text-7xl">
					<div className="flex items-center justify-center">
						<div>{hour}</div>
						<span>:</span>
						<div>{minutes}</div>
						<span>:</span>
						<div>{second}</div>

						<div>{ampm}</div>
					</div>
					<div className="">Date</div>
				</div>
			</div>
		</section>
	);
};

export default Clock;
