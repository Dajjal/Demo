using System.Text.Json.Nodes;
using System.Xml;
using Core.Domain.Abstracts;

namespace Core.Application.Models.Contracts;

public class MarkupDto(string name, XmlDocument document, JsonArray fields) : AbstractGuidModel
{
    public string Name { get; set; } = name;
    public XmlDocument Document { get; set; } = document;
    public JsonArray Fields { get; set; } = fields;
}