

const Trasporti = () => {
    return(
        <>
            <div className="text-center text-bold text-zinc-200">
                <h1>Go, Go, Power Rangers!</h1>
            </div>
            <div className="tables-big-container">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Piano Voli</h1>
                    <table className="table-auto w-full mb-8 border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Data</th>
                        <th className="border border-gray-300 px-4 py-2">Aeroporto Partenza</th>
                        <th className="border border-gray-300 px-4 py-2">Orario Partenza</th>
                        <th className="border border-gray-300 px-4 py-2">Aeroporto Arrivo</th>
                        <th className="border border-gray-300 px-4 py-2">Orario Arrivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">13/08/24</td>
                        <td className="border border-gray-300 px-4 py-2">Roma (FCO)</td>
                        <td className="border border-gray-300 px-4 py-2">09:40</td>
                        <td className="border border-gray-300 px-4 py-2">Kuala Lumpur (KUL)</td>
                        <td className="border border-gray-300 px-4 py-2">07:50 (+1)</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">21/08/24</td>
                        <td className="border border-gray-300 px-4 py-2">Kota Bahru</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">Penang</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">23/08/24</td>
                        <td className="border border-gray-300 px-4 py-2">Penang</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">Singapore</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">26/08/24</td>
                        <td className="border border-gray-300 px-4 py-2">Kuala Lumpur (KUL)</td>
                        <td className="border border-gray-300 px-4 py-2">09:35</td>
                        <td className="border border-gray-300 px-4 py-2">Roma (FCO)</td>
                        <td className="border border-gray-300 px-4 py-2">20:55</td>
                        </tr>
                    </tbody>
                    </table>

                    <h1 className="text-2xl font-bold mb-4">Noleggio Auto</h1>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Data Ritiro</th>
                        <th className="border border-gray-300 px-4 py-2">Orario Ritiro</th>
                        <th className="border border-gray-300 px-4 py-2">Luogo Ritiro</th>
                        <th className="border border-gray-300 px-4 py-2">Data Consegna</th>
                        <th className="border border-gray-300 px-4 py-2">Luogo Consegna</th>
                        <th className="border border-gray-300 px-4 py-2">Orario Consegna</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">16/08/24</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2">Kuala Lumpur</td>
                        <td className="border border-gray-300 px-4 py-2">21/08/24</td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
        </>
    )
}

export default Trasporti;