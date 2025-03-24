import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export default function Connect({ buttonType }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");

    const handleSubmit = () => {
        console.log({ name, phone, company });
        // Handle form submission logic here
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    {buttonType === "apply" ? (
                        <button className="border border-red-500 px-4 py-2 rounded hover:bg-red-500 transition duration-300 inline-flex items-center">
                            <span className="flex items-center">
                                Подать заявку
                                <IoChevronDownCircleOutline className="ml-2 text-2xl text-red-500 hover:text-white" />
                            </span>
                        </button>
                    ) : (
                        <button className="bg-red-500 text-white font-evolventa px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                            Связаться с нами
                        </button>
                    )}
                </div>
            </DialogTrigger>

            <DialogContent className="bg-black border border-red-500 text-white">
                <DialogHeader>
                    <DialogTitle>Введите ваши данные</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Input className="bg-black border border-red-500 text-white" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input className="bg-black border border-red-500 text-white" placeholder="Номер телефона" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <Input className="bg-black border border-red-500 text-white" placeholder="Название компании" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <button className="bg-black border border-red-500 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300" onClick={handleSubmit}>Отправить</button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
