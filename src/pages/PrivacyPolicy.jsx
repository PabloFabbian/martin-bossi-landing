import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gradient-to-b from-[#0b0c1c] via-[#012141] to-[#050f24] min-h-screen py-8 md:py-24 2xl:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#040616] shadow-xl rounded-xl p-8 md:p-12 border border-[#0353A4]/30">
                    <div className="text-center mb-10 border-b border-[#0353A4]/30 pb-8">
                        <p className="text-white text-xs uppercase tracking-wide mb-6">Documento Legal</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Política de Privacidad
                        </h1>
                        <p className="text-xl text-[#979DAC] font-semibold">
                            MARTIN BOSSI S.R.L.
                        </p>
                        <div className="w-24 h-1 bg-[#0466C8] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="mb-12 bg-[#0A1128] p-6 rounded-xl border border-[#0353A4]/20">
                        <p className="text-[#979DAC] leading-relaxed">
                            En MARTIN BOSSI S.R.L., valoramos y respetamos la privacidad de nuestros
                            clientes y usuarios. La presente nota indica nuestra Política de
                            Privacidad y explica cómo recopilamos, utilizamos, compartimos y
                            protegemos su información personal al utilizar nuestra aplicación web y
                            servicios relacionados. Al acceder usted acepta las prácticas descritas
                            en esta política.
                        </p>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            1. Responsable del tratamiento de datos
                        </h2>
                        <div className="bg-[#0A1128] p-6 rounded-lg border border-[#0353A4]/20 space-y-4">
                            <p className="text-[#979DAC]"><strong className="text-white">Titular:</strong> MARTIN BOSSI S.R.L.</p>
                            <p className="text-[#979DAC]"><strong className="text-white">CUIT:</strong> 30-71751300-9</p>
                            <p className="text-[#979DAC]">
                                <strong className="text-white">Domicilio legal:</strong> Av. Juan B. Alberdi N° 875, Depto. 1, Caballito C.A.B.A.
                            </p>
                            <p className="text-[#979DAC]">
                                <strong className="text-white">Email de contacto:</strong> martin.bossi.adm@gmail.com
                            </p>
                        </div>
                    </section>

                    <div className="border-t border-[#0353A4]/30 my-8"></div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            2. Información que recopilamos
                        </h2>
                        <p className="text-[#979DAC] mb-8">Recopilamos los siguientes tipos de información:</p>

                        <div className="mb-10">
                            <h3 className="text-xl font-semibold text-white mb-4">2.1. Información proporcionada por el usuario:</h3>
                            <ul className="list-disc list-inside text-[#979DAC] space-y-3 ml-5">
                                <li>Nombre y apellido</li>
                                <li>Dirección de correo electrónico</li>
                                <li>Número de teléfono</li>
                                <li>Información de la empresa (DNI, CUIT, razón social, dirección comercial)</li>
                                <li>Información de facturación y pagos</li>
                            </ul>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-xl font-semibold text-white mb-4">2.2. Información recopilada automáticamente:</h3>
                            <ul className="list-disc list-inside text-[#979DAC] space-y-3 ml-5">
                                <li>Dirección IP</li>
                                <li>Tipo de navegador y sistema operativo</li>
                                <li>Historial de navegación dentro de la web</li>
                                <li>Cookies y tecnologías similares (ver sección 6)</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            3. Finalidad de la recopilación (tratamiento de datos)
                        </h2>
                        <p className="text-[#979DAC] mb-4">La información recopilada será utilizada para los siguientes fines:</p>
                        <ul className="list-disc list-inside text-[#979DAC] space-y-3 ml-5">
                            <li>Atención al cliente</li>
                            <li>Facturación y administración de cuentas</li>
                            <li>Para la prestación del servicio</li>
                            <li>Cumplir con obligaciones legales y regulatorias</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            4. Conservación de los datos
                        </h2>
                        <p className="text-[#979DAC]">
                            Los datos personales serán conservados mientras exista una relación
                            activa con el usuario y por el tiempo que resulte necesario para cumplir
                            con obligaciones legales, contractuales o administrativas.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            5. Comunicación de datos a terceros
                        </h2>
                        <p className="text-[#979DAC] mb-6">
                            MARTIN BOSSI S.R.L., no comercia, vende, ni renta los datos personales.
                            Quienes resulten clientes y/o beneficiarios de nuestros servicios,
                            sabrán oportunamente que se compartirán sus datos en casos específicos como:
                        </p>
                        <ul className="list-disc list-inside text-[#979DAC] space-y-3 ml-5">
                            <li>Proveedores de servicios que nos asisten en la operaciones comerciales y de sistema (ej. hosting, procesadores de pagos), bajo acuerdos de confidencialidad.</li>
                            <li>Por requerimiento legal de autoridades competentes.</li>
                            <li>En caso de fusión, adquisición o reorganización de la empresa.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            6. Uso de cookies
                        </h2>
                        <p className="text-[#979DAC]">
                            Las cookies que utilizamos son para mejorar la experiencia del
                            usuario. Ellas permiten recordar sus preferencias, hacer estadísticas de
                            uso y brindar contenido personalizado. Usted puede configurar su
                            navegador para rechazar o eliminar cookies, aunque esto podría afectar
                            el funcionamiento del sitio.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            7. Seguridad de los datos
                        </h2>
                        <p className="text-[#979DAC]">
                            MARTIN BOSSI S.R.L., informa a los titulares de datos que la empresa cuenta
                            con adecuadas medidas técnicas y protocolos de protección de la
                            información personal contra pérdida, acceso no autorizado, alteración o
                            destrucción. Minimizando con ello los riesgos posibles.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            8. Derechos del titular de los datos
                        </h2>
                        <p className="text-[#979DAC] mb-6">
                            Por disposición legal -Conf. Ley 25.326- Los titulares de los datos
                            tienen derecho a:
                        </p>
                        <ul className="list-disc list-inside text-[#979DAC] space-y-3 ml-5">
                            <li>Acceder a sus datos personales</li>
                            <li>Rectificar datos inexactos o desactualizados</li>
                            <li>Solicitar la supresión de sus datos, cuando corresponda</li>
                            <li>Oponerse al tratamiento de sus datos con fines comerciales</li>
                        </ul>
                        <p className="text-[#979DAC] mt-8 bg-[#0A1128] p-5 rounded-lg border border-[#0353A4]/20">
                            Para ejercer estos derechos, puede enviar un correo electrónico a:
                            <a href="mailto:martin.bossi.adm@gmail.com" className="text-[#00A6D6] hover:underline font-medium ml-2">
                                martin.bossi.adm@gmail.com
                            </a>
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            9. Autoridad de control
                        </h2>
                        <p className="text-[#979DAC]">
                            La Agencia de Acceso a la Información Pública pertenece y dependiente de
                            la Jefatura de Gabinete de Ministros, es el órgano de control de la Ley
                            N.º 25.326. Los reclamos de usuarios por protección y/o vulneración de
                            sus derechos, deberán presentarse ante dicha autoridad.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            10. Cambios en la política de privacidad
                        </h2>
                        <p className="text-[#979DAC]">
                            La empresa se reserva el derecho de modificar la presente Política de
                            Privacidad en cualquier momento, sin aviso previo. Durante el uso
                            continuo del servicio, conforme la operatoria, se podrá ver afectado por
                            el dichas modificaciones, las que implican la aceptación de la nueva
                            política.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-6 border-b-2 border-[#0353A4]/30 pb-2">
                            11. Contacto
                        </h2>
                        <div className="bg-[#0A1128] p-6 rounded-lg border border-[#0353A4]/20 space-y-4">
                            <p className="text-[#979DAC]">
                                <strong className="text-white">Email:</strong>
                                <a href="mailto:martin.bossi.adm@gmail.com" className="text-[#00A6D6] hover:underline ml-2">
                                    martin.bossi.adm@gmail.com
                                </a>
                            </p>
                            <p className="text-[#979DAC]">
                                <strong className="text-white">Dirección legal:</strong> Av. Juan B. Alberdi N° 875, Depto. 1, Caballito C.A.B.A.
                            </p>
                        </div>
                    </section>

                    <div className="border-t border-[#0353A4]/30 pt-10 text-center text-sm">
                        <div className="w-16 h-1 bg-[#0353A4] mx-auto mb-6 rounded-full"></div>
                        <p className="text-white font-semibold mb-3 text-lg">
                            "MARTIN BOSSI S.R.L." - Todos los derechos reservados*
                        </p>
                        <p className="text-[#979DAC] mb-3">
                            <strong>Última actualización:</strong> Septiembre 2025
                        </p>
                        <p className="text-[#979DAC]">
                            En cumplimiento con la Ley de Protección de Datos Personales N.º 25.326 (Argentina)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;