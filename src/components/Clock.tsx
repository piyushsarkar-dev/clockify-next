const Clock = () => {
	return (
		<section>
			<div className="mx-auto h-80 w-180 rounded-xl bg-gray-100 shadow-2xl">
				<div className="bg flex items-center p-3">
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
						<div className="">00</div>
						<span>:</span>
						<div className="">00</div>
						<span>:</span>
						<div className="">00</div>
						<div className="">XX</div>
					</div>
					<div className="">Date</div>
				</div>
			</div>
		</section>
	);
};

export default Clock;
