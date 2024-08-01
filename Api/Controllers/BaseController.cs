using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

/// <summary>
/// Базовый, корневой контроллер
/// </summary>
[ApiController]
[Route("api/[controller]/[action]")]
public class BaseController : ControllerBase;