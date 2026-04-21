import Navbar from "@/components/Navbar";

export default function FAQ() {
  const faqs = [
    { q: "Is this legal?", a: "Define 'legal'. Our lawyers say yes, mostly." },
    { q: "Will I get audited?", a: "Only if you're not using our 'Stealth Mode' feature (available on the $100k/mo tier)." },
    { q: "Do you have a free tier?", a: "This website is for rich people. If you want free, go back to using spreadsheets." },
    { q: "Can I pay in crypto?", a: "Only if it's a coin you invented to artificially inflate your net worth." }
  ];

  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 pt-32 pb-20">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-center">Frequently Argued Questions</h1>
        <p className="text-muted text-lg mb-16 text-center">
          We get it, you have trust issues because everyone wants a piece of your pie. Here are some answers.
        </p>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{faq.q}</h3>
              <p className="text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
