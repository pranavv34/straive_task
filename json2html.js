export default function json2html(data) {
    
    const columns = Array.from(new Set(data.flatMap(item => Object.keys(item))));
    
    
    let html = `<table data-user="pranavuddagiri@gmail.com"><thead><tr>`;
    
    
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    
    html += `</tr></thead><tbody>`;
    
    
    data.forEach(row => {
      html += `<tr>`;
      columns.forEach(col => {
        html += `<td>${row[col] || ''}</td>`;
      });
      html += `</tr>`;
    });
    
    
    html += `</tbody></table>`;
    
    return html;
  }
  