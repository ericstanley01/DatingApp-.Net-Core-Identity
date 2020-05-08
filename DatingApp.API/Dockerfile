FROM mcr.microsoft.com/dotnet/core/sdk:3.1
WORKDIR /app
COPY /app /app
# RUN sed -i "s|DEFAULT@SECLEVEL=2|DEFAULT@SECLEVEL=1|g" /etc/ssl/openssl.cnf
RUN cp /etc/ssl/openssl.cnf /etc/ssl/openssl.cnf.ORI && \
	sed -i "s/\(MinProtocol *= *\).*/\1TLSv1.0 /" "/etc/ssl/openssl.cnf" && \
	sed -i "s/\(CipherString *= *\).*/\1DEFAULT@SECLEVEL=1 /" "/etc/ssl/openssl.cnf" && \
	(diff -u /etc/ssl/openssl.cnf.ORI /etc/ssl/openssl.cnf || exit 0)
CMD ASPNETCORE_URLS=http://*:$PORT dotnet DatingApp.API.dll
