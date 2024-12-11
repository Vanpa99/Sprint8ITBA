function Header({ handleLogout }) {
    return (
      <header className={styles.encabezado}>
        <div className={styles.logo}>
          <Image src={Logo} alt="Logo de la Empresa" height={50} />
        </div>
        <h2 className={styles.saludo}>¡Bienvenido!</h2>
        <Boton text="Cerrar sesión" action="logout" className={styles.noFlex} />
      </header>
    );
  }

  export default Header;