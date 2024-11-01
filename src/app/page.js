import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="section__message">
        <h2>Empower your clients to manage their marketing campaigns, so you can focus on growth.</h2>
        <p>Streamline your workflow while giving clients the control they need to succeed</p>
        <button className="button__main">Get FlowTarget</button>
      </section>
    </main>
  );
}
