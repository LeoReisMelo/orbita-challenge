import React from 'react';
import './style.css';




export default function App(){
  
    return (
       <>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6 menu">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="./icon.png"/></svg>
      
        <span class="font-semibold text-xl tracking-tight font-sans">Green CO.</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    </nav>
    <div class="card">
    <div class="max-w-sm rounded overflow-hidden shadow-lg fatura-atrasada">
    <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 font-sans"><strong>Fatura</strong><div class="data inline-block"> Dez 2019</div><div class="atrasada bg-red-600 inline-block">Em atraso</div></div>
    <p class="text-base text-gray-900 valor font-sans">
      <strong>2.377</strong><p class="consumo text-gray-500 inline-block">MB</p>
    </p>
    <p class="text-base text-gray-500 font-sans preço">
      R$ <p class="text-xl text-red-600 inline-block">41,19</p>
    </p>
    <p class="text-xl text-gray-500 text-left venc font-sans">
      Vencimento
      <p class="text-xl text-black font-bold font-sans">05/01 <p class="text-base inline-block">Domingo</p></p>
    </p>
  </div>
  </div>
  
 
    <div class="max-w-sm rounded overflow-hidden shadow-lg fatura-paga">
    <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 font-sans "><strong>Fatura</strong><div class="data inline-block"> Nov 2019</div><div class="vencimento bg-green-600 inline-block">Pago</div></div>
    <p class="text-base text-gray-900 valor font-sans">
      <strong>2.958</strong><p class="consumo text-gray-500 inline-block">MB</p>
    </p>
    <p class="text-base text-gray-500 font-sans preço">
      R$ <p class="text-xl text-green-600 inline-block font-sans">47,32</p>
    </p>
    <p class="text-xl text-gray-500 text-left venc font-sans">
      Vencimento
      <p class="text-xl text-black font-bold font-sans">05/12 <p class="text-base inline-block">Quinta-feira</p></p>
    </p>
    <p class="text-lg text-green-500 text-right font-sans">
      Efetuar pagamento
    </p>
  </div>
  </div>
  

    <div class="max-w-sm rounded overflow-hidden shadow-lg fatura-aberta">
    <div class="px-6 py-4 ">
    <div class="font-bold text-xl mb-2 font-sans"><strong>Fatura</strong><div class="data inline-block"> Jan 2020</div><div class="aberta bg-purple-600 inline-block">Aberta</div></div>
    <p class="text-base text-gray-900 valor font-sans">
      <strong>306</strong><p class="consumo text-gray-500 inline-block">MB</p>
    </p>
    <p class="text-base text-gray-500 font-sans preço">
      R$ <p class="text-xl text-purple-600 inline-block">4,65</p>
    </p>
    <p class="text-xl text-gray-500 text-left venc font-sans">
      Vencimento
      <p class="text-xl text-black font-bold">05/02 <p class="text-base inline-block">Quarta-feira</p></p>
    </p>
  </div>
  </div>
  </div>
    </>
    
    
    
    );
 }