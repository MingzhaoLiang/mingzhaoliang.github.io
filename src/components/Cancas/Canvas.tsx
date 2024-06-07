import classes from "./Canvas.module.css";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/stores/hooks";

const SPEED = 0.025;
const CANVAS_SIZE = 30;

const DELTA = 64;
const OFFSET = 40;

export default function Canvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const { darkMode } = useAppSelector((state) => state.display);

	useEffect(() => {
		if (!canvasRef.current) return;

		const ctx = canvasRef.current.getContext("2d");

		if (!ctx) return;

		const fill = (x: number, y: number, r: number, g: number, b: number) => {
			ctx.fillStyle = `rgb(${r},${g},${b})`;
			ctx.fillRect(x, y, 5, 5);
		};

		const randomR = (x: number, y: number, t: number) => {
			return Math.floor(175 + DELTA * Math.cos((x * x - y * y) / 300 + t));
		};

		const randomG = (x: number, y: number, t: number) => {
			return Math.floor(
				195 + DELTA * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
			);
		};

		const randomB = (x: number, y: number, t: number) => {
			return Math.floor(
				255 +
					DELTA *
						Math.sin(
							(5 *
								Math.sin(t / 9) *
								((x - OFFSET) * (x - OFFSET) + (y - OFFSET) * (y - OFFSET))) /
								1100
						)
			);
		};

		let t = 0;

		const loop = () => {
			for (let x = 0; x <= CANVAS_SIZE; x++) {
				for (let y = 0; y <= CANVAS_SIZE; y++) {
					fill(x, y, randomR(x, y, t), randomG(x, y, t), randomB(x, y, t));
				}
			}

			t += SPEED;

			// console.log(ctx);

			window.requestAnimationFrame(loop);
		};

		loop();
	}, []);

	return (
		<div className={classes.aurora}>
			<div className={`${classes.overlay} ${darkMode ? classes.dark : ""}`} />
			<div className={classes["canvas-container"]}>
				<canvas
					id="canvas"
					ref={canvasRef}
					width={CANVAS_SIZE}
					height={CANVAS_SIZE}
				></canvas>
			</div>
		</div>
	);
}
