import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                    <div className='bg-white min-h-screen rounded-lg shadow-md mt-5 p-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
                            <div className='bg-white hover:text-gray-700 transition hover:scale-[102%] text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                            <div className='bg-white text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                            <div className='bg-white text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                            <div className='bg-white text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                            <div className='bg-white text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                            <div className='bg-white text-dark rounded-xl shadow-lg p-3'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia animi commodi magni ipsum amet! Dignissimos ad nesciunt itaque hic autem minus eveniet mollitia vero, alias porro fugit beatae atque, at in assumenda quibusdam tempore! Eveniet modi aliquid distinctio recusandae placeat ad beatae, vitae earum voluptates illo repellendus provident debitis veritatis. Itaque consectetur, doloremque cumque hic quasi voluptatem numquam sequi exercitationem dignissimos cum repudiandae tempore debitis
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
