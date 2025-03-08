import React, { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    day: '',
    date: '',
    kilometers: '',
    time: '',
    shoes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-5 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-5">Ingresar Datos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="day" className="block text-sm font-medium text-gray-700">Día de la semana</label>
          <select
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
          >
            <option value="">Selecciona un día</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kilometers" className="block text-sm font-medium text-gray-700">Kilómetros recorridos</label>
          <input
            type="number"
            id="kilometers"
            name="kilometers"
            value={formData.kilometers}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Tiempo</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
            placeholder="Ej. 50:03"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shoes" className="block text-sm font-medium text-gray-700">Tenis usados</label>
          <input
            type="text"
            id="shoes"
            name="shoes"
            value={formData.shoes}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Formulario;