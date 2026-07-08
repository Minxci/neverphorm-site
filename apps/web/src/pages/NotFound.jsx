import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function DinoGame() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const stateRef = useRef({
    dino: { y: 0, vy: 0, jumping: false },
    obstacles: [],
    frame: 0,
    speed: 6,
    running: false,
  });

  const GROUND_Y = 150;
  const DINO_X = 40;
  const DINO_SIZE = 30;
  const GRAVITY = 1.2;
  const JUMP_FORCE = -16;

  const jump = () => {
    const s = stateRef.current;
    if (!s.running) return;
    if (!s.dino.jumping) {
      s.dino.vy = JUMP_FORCE;
      s.dino.jumping = true;
    }
  };

  const startGame = () => {
    const s = stateRef.current;
    s.dino = { y: 0, vy: 0, jumping: false };
    s.obstacles = [];
    s.frame = 0;
    s.speed = 6;
    s.running = true;
    setScore(0);
    setGameOver(false);
    setStarted(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    function loop() {
      const s = stateRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ground line
      ctx.strokeStyle = "#444";
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + DINO_SIZE);
      ctx.lineTo(canvas.width, GROUND_Y + DINO_SIZE);
      ctx.stroke();

      if (s.running) {
        s.frame++;

        // physics
        s.dino.vy += GRAVITY;
        s.dino.y += s.dino.vy;
        if (s.dino.y > 0) {
          s.dino.y = 0;
          s.dino.vy = 0;
          s.dino.jumping = false;
        }

        // spawn obstacles
        if (s.frame % Math.max(50 - Math.floor(s.speed), 30) === 0) {
          s.obstacles.push({ x: canvas.width, w: 16 + Math.random() * 14 });
        }

        // move obstacles
        s.obstacles.forEach((o) => (o.x -= s.speed));
        s.obstacles = s.obstacles.filter((o) => o.x + o.w > 0);

        // speed ramp
        s.speed += 0.002;

        // score
        if (s.frame % 6 === 0) {
          setScore((prev) => prev + 1);
        }

        // collision
        const dinoTop = GROUND_Y + s.dino.y;
        const dinoBottom = dinoTop + DINO_SIZE;
        for (const o of s.obstacles) {
          const oTop = GROUND_Y + DINO_SIZE - 28;
          if (
            DINO_X + DINO_SIZE > o.x &&
            DINO_X < o.x + o.w &&
            dinoBottom > oTop
          ) {
            s.running = false;
            setGameOver(true);
            setBest((b) => Math.max(b, score));
          }
        }
      }

      // draw dino
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(DINO_X, GROUND_Y + s.dino.y, DINO_SIZE, DINO_SIZE);

      // draw obstacles
      ctx.fillStyle = "#e5e5e5";
      s.obstacles.forEach((o) => {
        ctx.fillRect(o.x, GROUND_Y + DINO_SIZE - 28, o.w, 28);
      });

      animationId = requestAnimationFrame(loop);
    }

    loop();
    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (!started || gameOver) {
          startGame();
        } else {
          jump();
        }
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, gameOver]);

  const handleTap = () => {
    if (!started || gameOver) {
      startGame();
    } else {
      jump();
    }
  };

  return (
    <div className="mx-auto max-w-md text-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        onClick={handleTap}
        className="mx-auto w-full cursor-pointer rounded-xl border border-neutral-200 bg-black"
      />
      <p className="mt-3 text-sm text-neutral-500">
        {!started
          ? "Tap or press Space to start"
          : gameOver
          ? `Game over — score ${score}. Tap or press Space to retry.`
          : "Tap or press Space to jump"}
      </p>
      <p className="mt-1 text-xs text-neutral-400">
        Score: {score} {best > 0 && `· Best: ${best}`}
      </p>
    </div>
  );
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold tracking-tight text-black">404</h1>
          <p className="mt-4 text-lg text-neutral-600">
            This page doesn't exist. While you're here, try not to hit anything.
          </p>

          <div className="mt-10">
            <DinoGame />
          </div>

          <Link
            to="/"
            className="mt-10 inline-block text-sm font-medium text-neutral-600 transition-colors hover:text-black"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}