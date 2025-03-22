import { Field, Input, Label } from '@headlessui/react';
import FormLayout from '../components/auth/FormLayout';
import PrimaryBtn from '../components/shared/PrimaryBtn';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../api/auth';

const loginSchema = z.object({
    telephone: z
        .string()
        .regex(/^\+?\d{10,15}$/, 'Введите корректный номер телефона'),
    password: z.string().min(6, 'Пароль должен быть не менее 6 символов'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema),
    });

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // TODO: Handle successful login (e.g., redirect, store token)
            console.log('Login success:', data);
        },
        onError: (error: any) => {
            if (error.response?.data?.detail) {
                setError('root', { message: error.response.data.detail });
            } else {
                setError('root', { message: 'Ошибка входа. Попробуйте позже.' });
            }
        },
    });

    const onSubmit = (data: LoginFormInputs) => {
        mutation.mutate(data);
    };

    return (
        <FormLayout isLogin={true}>
               <form onSubmit={handleSubmit(onSubmit)}>
                <Field className="mb-6 sm:mb-8 sm:flex sm:items-center sm:gap-5">
                    <Label className="uppercase mb-4 sm:mb-0 block sm:text-xl sm:w-40">
                        Телефон
                    </Label>
                    <Input
                        {...register('telephone')}
                        type="text"
                        className="bg-gray-30 rounded-full w-full py-2 px-4 text-xl text-black"
                    />
                </Field>
                {errors.telephone && (
                    <p className="text-red-500 mb-4">{errors.telephone.message}</p>
                )}

                <Field className="mb-18 sm:mb-11 sm:flex sm:items-center sm:gap-5">
                    <Label className="uppercase mb-3 block sm:mb-0 sm:text-xl sm:w-40">
                        Пароль
                    </Label>
                    <Input
                        {...register('password')}
                        type="password"
                        className="bg-gray-30 rounded-full w-full py-2 px-4 text-xl text-black"
                    />
                </Field>
                {errors.password && (
                    <p className="text-red-500 mb-4">{errors.password.message}</p>
                )}

                {errors.root && (
                    <p className="text-red-500 mb-4">{errors.root.message}</p>
                )}

                <PrimaryBtn /* type="submit" disabled={mutation.isPending} */>
                    {mutation.isPending ? 'Вход...' : 'Войти'}
                </PrimaryBtn>
            </form>
        </FormLayout>
    );
}
