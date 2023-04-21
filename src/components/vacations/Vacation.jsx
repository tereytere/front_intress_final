import React from 'react';
import './vacation.css';
function Vacation () {
    return (
        <div className="container-table">
        <div className="table">
            <table>  
            <tbody>
            <tr>
            <td colspan="3"className='number'>24</td>
            <td colspan="3"className='number' >11</td>
            <td colspan="3"className='number'>13</td>
            </tr> 
            </tbody>
            <tfoot>
            <tr>
        <td colspan="3"className='letras'>Totales</td>
        <td colspan="3"className='letras'>Disfrutados</td>
        <td colspan="3"className='letras'>Disponibles</td>
        </tr>
        </tfoot> 
        </table>
        </div>
        </div>
        );
}

export default Vacation;