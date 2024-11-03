import Header from "@/components/header/Header";
import "./main.css"

export default function Home() {
  return (
    <main>
      <Header />
      <section className="section__message">
        <h2>EMPOWER YOUR CLIENTS TO MANAGE THE MARKETING CAMPAIGNS</h2>
        <button className="button__main">GET FLOW TARGET</button>
      </section>
    </main>
  );
}
