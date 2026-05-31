'use client'

import { useState } from 'react'
import { Card, Form, Input, InputGroup, TextField, Label, Button } from '@heroui/react'
import { Mail, Lock, User, Image as ImageIcon, Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify'

const RegisterForm = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Form inputs state
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    // Track input updates cleanly
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = async (e) => {
        e.preventDefault() // Prevents page reload
        
        const { name, image, email, password, confirmPassword } = formData

        /* =========================
           VALIDATION
        ========================= */
        if (password !== confirmPassword) {
            toast.warning('Passwords do not match', { position: 'top-right', autoClose: 4000 })
            return
        }

        if (password.length < 6) {
            toast.warning('Password must be at least 6 characters', { position: 'top-right', autoClose: 4000 })
            return
        }

        try {
            await authClient.signUp.email(
                { name, email, password, image },
                {
                    onRequest: () => setLoading(true),
                    onSuccess: () => {
                        setLoading(false)
                        toast.success('Account created successfully! 🌸 Welcome to Sweet Rose', {
                            position: 'top-right',
                            autoClose: 3000,
                        })
                        router.push('/')
                    },
                    onError: (ctx) => {
                        setLoading(false)
                        toast.error(ctx.error.message || 'Registration failed. Please try again', {
                            position: 'top-right',
                            autoClose: 4000,
                        })
                    },
                }
            )
        } catch (err) {
            setLoading(false)
            toast.error('Something went wrong', { position: 'top-right', autoClose: 4000 })
            console.error(err)
        }
    }

    return (
        <Card className='w-full max-w-md p-8 shadow-2xl rounded-[2.5rem] border border-border bg-card text-card-foreground transition-colors duration-300'>
            {/* Header */}
            <div className='text-center mb-8'>
                <div className='w-16 h-16 mx-auto bg-secondary text-primary flex items-center justify-center rounded-2xl mb-4'>
                    <User size={28} />
                </div>
                <h1 className='text-3xl font-serif font-bold text-foreground'>Create Account</h1>
                <p className='text-muted-foreground mt-2'>Join Sweet Rose and enjoy sweet moments</p>
            </div>

            {/* Form */}
            <Form onSubmit={handleRegister} className='w-full space-y-5'>
                
                {/* Name */}
                <TextField isRequired className="w-full">
                    <Label className='text-foreground font-medium mb-2'>Full Name</Label>
                    <InputGroup fullWidth className='bg-secondary border border-border rounded-2xl px-3 focus-within:ring-2 focus-within:ring-primary/20'>
                        <InputGroup.Prefix><User size={18} className='text-primary' /></InputGroup.Prefix>
                        <Input
                            name='name'
                            type='text'
                            placeholder='John Doe'
                            value={formData.name}
                            onChange={handleChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full'
                        />
                    </InputGroup>
                </TextField>

                {/* Image URL */}
                <TextField className="w-full">
                    <Label className='text-foreground font-medium mb-2'>Profile Image URL</Label>
                    <InputGroup fullWidth className='bg-secondary border border-border rounded-2xl px-3 focus-within:ring-2 focus-within:ring-primary/20'>
                        <InputGroup.Prefix><ImageIcon size={18} className='text-primary' /></InputGroup.Prefix>
                        <Input
                            name='image'
                            type='text'
                            placeholder='https://example.com/profile.jpg'
                            value={formData.image}
                            onChange={handleChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full'
                        />
                    </InputGroup>
                </TextField>

                {/* Email */}
                <TextField isRequired className="w-full">
                    <Label className='text-foreground font-medium mb-2'>Email</Label>
                    <InputGroup fullWidth className='bg-secondary border border-border rounded-2xl px-3 focus-within:ring-2 focus-within:ring-primary/20'>
                        <InputGroup.Prefix><Mail size={18} className='text-primary' /></InputGroup.Prefix>
                        <Input
                            name='email'
                            type='email'
                            placeholder='hello@sweetrose.com'
                            value={formData.email}
                            onChange={handleChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full'
                        />
                    </InputGroup>
                </TextField>

                {/* Password */}
                <TextField isRequired className="w-full">
                    <Label className='text-foreground font-medium mb-2'>Password</Label>
                    <InputGroup fullWidth className='bg-secondary border border-border rounded-2xl px-3 focus-within:ring-2 focus-within:ring-primary/20'>
                        <InputGroup.Prefix><Lock size={18} className='text-primary' /></InputGroup.Prefix>
                        <Input
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='••••••••'
                            value={formData.password}
                            onChange={handleChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full'
                        />
                        <InputGroup.Suffix>
                            <button type='button' onClick={() => setShowPassword(!showPassword)} className='text-muted-foreground hover:text-primary transition'>
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>

                {/* Confirm Password */}
                <TextField isRequired className="w-full">
                    <Label className='text-foreground font-medium mb-2'>Confirm Password</Label>
                    <InputGroup fullWidth className='bg-secondary border border-border rounded-2xl px-3 focus-within:ring-2 focus-within:ring-primary/20'>
                        <InputGroup.Prefix><Lock size={18} className='text-primary' /></InputGroup.Prefix>
                        <Input
                            name='confirmPassword'
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='••••••••'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='bg-transparent text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-0 w-full'
                        />
                        <InputGroup.Suffix>
                            <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='text-muted-foreground hover:text-primary transition'>
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>

                {/* Submit */}
                <Button type='submit' isLoading={loading} className='w-full bg-primary text-primary-foreground font-bold rounded-2xl h-12 mt-2'>
                    Create Account
                </Button>

                {/* Divider */}
                <div className='flex items-center gap-3 my-4 w-full'>
                    <div className='h-px bg-border flex-1' />
                    <span className='text-xs text-muted-foreground'>OR</span>
                    <div className='h-px bg-border flex-1' />
                </div>

                {/* Google */}
                <Button variant='secondary' className='w-full bg-secondary text-foreground border border-border rounded-2xl' onPress={() => toast.info('Google signup coming soon! 🚀', { position: 'top-right', autoClose: 3000 })}>
                    <FcGoogle size={20} />
                    <span>Continue with Google</span>
                </Button>

                {/* Login Link */}
                <p className='text-center text-sm text-muted-foreground mt-4 w-full'>
                    Already have an account?{' '}
                    <Link href='/login' className='text-primary font-bold hover:underline'>Sign in</Link>
                </p>
            </Form>
        </Card>
    )
}

export default RegisterForm