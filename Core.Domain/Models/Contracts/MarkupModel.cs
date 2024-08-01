using Core.Domain.Abstracts;

namespace Core.Domain.Models.Contracts;

public class MarkupModel(string name, string document, string fields) : AbstractGuidModel
{
    public string Name { get; init; } = name;
    public string Document { get; init; } = document;
    public string Fields { get; init; } = fields;
}