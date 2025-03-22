import { Field, Input, Label } from '@headlessui/react';
import FormLayout from '../components/auth/FormLayout';
import PrimaryBtn from '../components/shared/PrimaryBtn';

export default function Signup() {
    return (
        <FormLayout isLogin={false}>
            <form>
                <Field className="mb-6 sm:mb-8 sm:flex sm:items-center sm:gap-5">
                    <Label className="uppercase mb-4 sm:mb-0 block sm:text-xl sm:w-40">
                        Телефон
                    </Label>
                    <Input
                        name="phone"
                        type="text"
                        className="bg-gray-30 rounded-full w-full py-2 px-4 text-xl text-black"
                    />
                </Field>
                <Field className="mb-18 sm:mb-11 sm:flex sm:items-center sm:gap-5">
                    <Label className="uppercase mb-3 block sm:mb-0 sm:text-xl sm:w-40">
                        Пароль
                    </Label>
                    <Input
                        name="password"
                        type="password"
                        className="bg-gray-30 rounded-full w-full py-2 px-4 text-xl text-black"
                    />
                </Field>

                <PrimaryBtn>Зарегистрироваться</PrimaryBtn>
            </form>
        </FormLayout>
    );
}
