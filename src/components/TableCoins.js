import React from "react";
import CoinRow from "./CoinRow";

const titles = ['#', 'Coin', 'Price', 'Price Change', '24hs Volume']

const TableCoins = ({ coins, search }) => {

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) |
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <table className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        {
                            titles.map((title, i) => (
                                <td key={i}>{title}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {filteredCoins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableCoins