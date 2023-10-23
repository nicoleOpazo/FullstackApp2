package com.h2.h2api.servicios;

import com.h2.h2api.modelos.Carrito;
import com.h2.h2api.modelos.Usuario;
import com.h2.h2api.repositorios.RepositorioCarrito;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ServicioCarritoImpl implements ServicioCarrito {
    private final RepositorioCarrito repositorioCarrito;

    private static final Logger log = LoggerFactory.getLogger(ServicioCarritoImpl.class);

    @Override
    @Transactional
    public Carrito guardarCarrito(Carrito carrito) {
        return repositorioCarrito.save(carrito);
    }

    @Override
    @Transactional
    public Carrito obtenerCarrito(Long idCarrito) {
        return repositorioCarrito.findById(idCarrito)
                .orElseThrow(() -> new RuntimeException("Carrito no encontrado"));
    }

    @Override
    @Transactional
    public Carrito modificarCarrito(Long id, Carrito carritoModificar) {
        Carrito carritoBuscado = repositorioCarrito.findById(id)
                .orElseThrow(() -> new RuntimeException("Carrito no encontrado"));

        carritoBuscado.setCodigo(carritoModificar.getCodigo());
        carritoBuscado.setTotal(carritoModificar.getTotal());
        carritoBuscado.setFechaCompra(carritoModificar.getFechaCompra());

        return carritoBuscado;
    }

    /*@Override
    public boolean eliminarCarrito(Long idCarrito) {
        try {
            log.debug("Intentando eliminar el carrito con ID: {}", idCarrito);
            repositorioCarrito.deleteById(idCarrito);
            log.info("Carrito eliminado con éxito. ID: {}", idCarrito);
            return true;
        } catch (Exception e) {
            log.error("Error al eliminar el carrito: {}", e.getMessage());
            return false;
        }
    }*/

    @Override
    @Transactional
    public List<Carrito> obtenerTodosLosCarritos() {
        return repositorioCarrito.findAll();
    }

    @Override
    @Transactional
    public Carrito obtenerCarritoPorUsuario(Usuario usuario) {
        return repositorioCarrito.findCarritoByUsuario(usuario);
    }
}
