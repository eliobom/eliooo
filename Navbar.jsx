import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css'; // Asegúrate de importar Font Awesome

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Tu Logo</NavbarBrand> {/* Cambia esto por el nombre de tu aplicación */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <i className="fa fa-home" aria-hidden="true"></i> {/* Ícono de casa */}
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sales">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> {/* Ícono de ventas */}
                  Ventas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/clients">
                  <i className="fa fa-users" aria-hidden="true"></i> {/* Ícono de clientes */}
                  Clientes
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Opciones
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/settings">
                    Configuraciones
                  </DropdownItem>
                  <DropdownItem href="/help">
                    Ayuda
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/logout">
                    Salir
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
