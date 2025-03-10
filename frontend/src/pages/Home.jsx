import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Seção do Banner */}
      <section className="hero">
        <h1>Bem-vindo ao Immigrant Support</h1>
        <p>Seu guia para uma nova vida! Encontre suporte, moradia, empregos e mais.</p>
        <button className="cta-button">Saiba Mais</button>
      </section>

      {/* Seção de Serviços */}
      <section className="services">
        <div className="service">
          <span>🛂</span>
          <h3>Documentação</h3>
          <p>Passo a passo para regularizar sua situação no novo país.</p>
        </div>
        <div className="service">
          <span>🏠</span>
          <h3>Moradia</h3>
          <p>Encontre casas e apartamentos acessíveis.</p>
        </div>
        <div className="service">
          <span>💼</span>
          <h3>Trabalho</h3>
          <p>Dicas e plataformas para conseguir um emprego.</p>
        </div>
        <div className="service">
          <span>📚</span>
          <h3>Educação</h3>
          <p>Cursos de idiomas, treinamentos e mais.</p>
        </div>
        <div className="service">
          <span>🏥</span>
          <h3>Saúde</h3>
          <p>Informações sobre hospitais, clínicas e seguro saúde.</p>
        </div>
        <div className="service">
          <span>🌍</span>
          <h3>Informações Úteis</h3>
          <p>Saiba tudo sobre o país onde você vai morar.</p>
        </div>
        <div className="service">
          <span>📊</span>
          <h3>Revenue</h3>
          <p>Guias sobre impostos, investimentos e finanças pessoais.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer>
        <p>&copy; 2024 SupImmigrant - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
