"use client";

import { useState } from "react";

const Clock = () => {
	const [hour, setHour] = useState(parseInt("00"));
	const [minute, setMinute] = useState(parseInt("00"));
	const [secoend, setSecoend] = useState(parseInt("00"));
	const [ampm, setAmpm] = useState();
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
						<div>{minute}</div>
						<span>:</span>
						<div>{secoend}</div>

						<div>{ampm}</div>
					</div>
					<div className="">Date</div>
				</div>
			</div>
		</section>
	);
};

export default Clock;
