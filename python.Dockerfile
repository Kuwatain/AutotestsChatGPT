FROM python:3
WORKDIR /pytest
COPY PythonTest /pytest
RUN pip install -r requirements.txt
COPY PythonTest .
CMD ["pytest"]