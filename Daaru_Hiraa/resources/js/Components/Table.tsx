import { useEffect, useState } from "react";

type tableProps = {
    titles: Array<string>;
    datas: any;
};

const Table = (props: tableProps) => {
    const { titles, datas } = props;
    const [dataLists, setDataLists] = useState<any>([]);

    // fetch data
    useEffect(() => {
        setDataLists(datas);
    }, [datas]);

    // console.log(dataLists.length);

    return (
        <>
            <table className="w-full text-sm text-textPrimary">
                {/* HEADING TABEL */}
                <thead className="text-xs text-textPrimary uppercase border-b-2">
                    <tr className="text-nowrap bg-gray-100">
                        {titles.map((title: string, index: number) => (
                            <th className="py-3" key={index}>
                                <span className="flex items-center justify-center">
                                    {title}
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                {/* END HEADING TABEL */}

                {/* CONTENT TABEL */}
                <tbody>
                    {/* END VAALIDATION DATA */}

                    {/* DATA PRESENSI */}
                    {dataLists.data?.map((list: any, index: number) => (
                        <tr
                            className="text-nowrap even:bg-gray-100"
                            key={index}
                        >
                            <td className="py-3">
                                <span className="flex items-center mx-2 justify-center">
                                    {index + 1}
                                </span>
                            </td>

                            <td className="py-3">
                                <span className="flex items-center justify-center">
                                    {list.user.name}
                                </span>
                            </td>

                            <td className="py-3 ">
                                <span className="flex items-center justify-center">
                                    {list.created_at}
                                </span>
                            </td>
                            <td className="py-3 flex items-center justify-center">
                                <span
                                    className={` py-1 px-2 rounded-lg  ${
                                        list.status === "Hadir"
                                            ? "bg-[#BFF6C3] text-green-500"
                                            : "bg-bgTidakHadir text-textTidakHadir"
                                    }`}
                                >
                                    {list.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    {/* END DATA PRESENSI */}
                </tbody>
            </table>

            {/* VAALIDATION DATA */}
            {dataLists.length === 0 && (
                <div className="my-20 flex items-center justify-center text-textPrimary">
                    <h1 className="font-semibold text-xl">TIdak Ada Data</h1>
                </div>
            )}
            {/* END VAALIDATION DATA */}
        </>
    );
};

export default Table;
