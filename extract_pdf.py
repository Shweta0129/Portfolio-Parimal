import PyPDF2
import sys

def extract_text(pdf_path, output_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
    
    with open(output_path, 'w', encoding='utf-8') as out_file:
        out_file.write(text)
    print("Extraction complete")

if __name__ == "__main__":
    extract_text("Parimal_Dongare_resume (1) (1).pdf", "resume_extracted.txt")
