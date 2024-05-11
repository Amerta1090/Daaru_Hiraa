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

    return (
        <div className="bg-primary shadow-sm sm:rounded-xl h-[250px] w-full mb-5 overflow-auto  ">
            <table className="w-full text-sm text-textPrimary">
                {/* HEADING TABEL */}
                <thead className="text-xs text-textPrimary uppercase border-b-2 bg-primary">
                    <tr className="text-nowrap ">
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
                        <tr className="text-nowrap even:bg-primary" key={index}>
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
                            <td className="py-3 flex items-center justify-center">
                                <span
                                    className={`text-[#ECFFEE] py-1 px-2 rounded-lg bg-[#00B112] ${
                                        list.status === "Hadir"
                                            ? "bg-bgHadir text-textHadir"
                                            : "bg-bgTidakHadir text-textTidakHadir"
                                    }`}
                                >
                                    {list.status}
                                </span>
                            </td>
                            <td className="py-3 ">
                                <span className="flex items-center justify-center">
                                    {list.created_at}
                                </span>
                            </td>
                        </tr>
                    ))}
                    {/* END DATA PRESENSI */}
                </tbody>
            </table>
            {/* VAALIDATION DATA */}
            {dataLists.data?.length === 0 && (
                <div className="mt-20 flex items-center justify-center text-textPrimary">
                    <h1 className="font-semibold text-xl">TIdak Ada Data</h1>
                </div>
            )}
        </div>
    );
};

export default Table;
