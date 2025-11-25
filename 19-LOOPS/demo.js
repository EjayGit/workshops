//TODO: Add 5 paragraphs to my DOM

for (let i=0; i<5; i++){
    const paragraph = document.createElement('p');
    paragraph.textContent = `Paragraph ${i}`;
    document.body.appendChild(paragraph);
}