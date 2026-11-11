import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/image1.png"; // keep your hero image import

/*
  Palette (add to tailwind.config.js -> theme.extend.colors):
    navy:   "#142B45"   Navbar, headings
    brand:  "#2563EB"   Buttons, links
    teal:   "#14B8A6"   Highlights, success
    page:   "#F8FAFC"   Page background
  Cards use plain white (bg-white).
*/

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
];

const rideTypes = [
  { name: "Bike", note: "Fastest in traffic", icon: "🏍️", eta: "2 min" },
  { name: "Auto", note: "Easy and affordable", icon: "🛺", eta: "4 min" },
  { name: "Cab", note: "AC, comfortable", icon: "🚕", eta: "6 min" },
];

const reasons = [
  { title: "Low fares", text: "See the price before you book. No surprises." },
  { title: "Quick pickup", text: "Nearby captains reach you in minutes." },
  { title: "Safe rides", text: "Share your trip live with family and friends." },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [ride, setRide] = useState("Bike");

  const handleBook = () => {
    if (!pickup.trim() || !drop.trim()) {
      alert("Please enter both pickup and drop locations.");
      return;
    }
    alert(`Booking a ${ride} from ${pickup} to ${drop}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#142B45]">
      {/* Navbar */}
      <header className="bg-[#142B45] text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="text-3xl font-bold tracking-tight">
            Veyaro<span className="text-[#14B8A6]">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-slate-200 transition hover:text-[#14B8A6]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/login"
              className="rounded-lg bg-[#2563EB] px-5 py-2 font-semibold transition hover:bg-blue-700"
            >
              Login
            </Link>
          </div>

          <button
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {open && (
          <div className="flex flex-col gap-1 border-t border-white/10 px-5 pb-4 md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-200 hover:text-[#14B8A6]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-[#2563EB] py-3 text-center font-semibold text-white"
            >
              Login
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 md:grid-cols-2 md:py-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Your City. Your Ride. Your Way.
          </h1>
          <p className="mt-4 text-lg text-slate-600 md:text-xl">
            Quick, affordable rides at your doorstep.
          </p>

          {/* Booking card */}
          <div className="mt-8 max-w-xl rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100">
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-[#2563EB]">
                <span className="h-3 w-3 rounded-full bg-[#14B8A6]" />
                <input
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-transparent py-4 outline-none"
                  placeholder="Enter pickup location"
                />
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-[#2563EB]">
                <span className="h-3 w-3 rounded-sm bg-[#142B45]" />
                <input
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  className="w-full bg-transparent py-4 outline-none"
                  placeholder="Enter drop location"
                />
              </div>
            </div>

            {/* Ride type picker */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {rideTypes.map((r) => (
                <button
                  key={r.name}
                  type="button"
                  onClick={() => setRide(r.name)}
                  className={`rounded-xl border p-3 text-center transition ${
                    ride === r.name
                      ? "border-[#2563EB] bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="text-2xl">{r.icon}</div>
                  <div className="mt-1 font-semibold">{r.name}</div>
                  <div className="text-xs font-medium text-[#14B8A6]">
                    {r.eta} away
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={handleBook}
              className="mt-5 w-full rounded-xl bg-[#2563EB] p-4 text-lg font-bold text-white transition hover:bg-blue-700"
            >
              Book {ride}
            </button>
          </div>
        </div>

        <img
          src={image}
          alt="Veyaro ride booking"
          className="w-full rounded-3xl object-cover shadow-xl"
        />
      </section>

      {/* Ride types */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-3xl font-bold">Pick the ride that fits</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {rideTypes.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="text-4xl">{r.icon}</div>
              <h3 className="mt-3 text-xl font-semibold">{r.name}</h3>
              <p className="mt-1 text-slate-600">{r.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Veyaro */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-3xl font-bold">Why ride with Veyaro</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <div className="mb-4 h-1.5 w-10 rounded-full bg-[#14B8A6]" />
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Captain CTA */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#142B45] p-8 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Drive with Veyaro</h2>
            <p className="mt-2 text-slate-300">
              Earn on your own schedule. Sign up in minutes.
            </p>
          </div>
          <Link
            to="/captain"
            className="rounded-xl bg-[#14B8A6] px-6 py-3 font-bold text-[#142B45] transition hover:brightness-110"
          >
            Become a captain
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Veyaro. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;