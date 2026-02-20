const Clock = () => {
	return (
		<section>
			<div className="mx-auto h-80 w-72 rounded-xl bg-gray-100 shadow-2xl">
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
			</div>
		</section>
	);
};

export default Clock;
