package com.h2.h2api.servicios;

import com.h2.h2api.modelos.Carrito;
import com.h2.h2api.modelos.Usuario;

import java.util.List;

public interface ServicioCarrito {
    public Carrito guardarCarrito(Carrito carrito);

    public Carrito obtenerCarrito(Long idCarrito);

    public Carrito modificarCarrito(Long id, Carrito carritoModificar);

    //public boolean eliminarCarrito(Long id);

    public Carrito obtenerCarritoPorUsuario(Usuario usuario);

    public List<Carrito> obtenerTodosLosCarritos();
}
