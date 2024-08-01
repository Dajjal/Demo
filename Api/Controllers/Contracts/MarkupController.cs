using Api.Controllers.Generics;
using Core.Application.Generics;
using Core.Application.Models.Contracts;
using Core.Domain.Models.Contracts;

namespace Api.Controllers.Contracts;

public class MarkupController(IGenericService<MarkupModel> service)
    : GenericCrudController<MarkupModel, MarkupDto>(service);